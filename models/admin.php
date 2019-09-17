<?php
/*  
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms
	$Id: admin.class.php 2010-08-24 10:42 $
*/
if (! defined ( 'IN_BIDCMS' )) {
	exit ( 'Access Denied' );
}
class admin {
	static $filelist = array ();
	
	function main_action() {
		global $db,$session;
		$uid = $session->get ( 'adminid' );
		//得到个人信息
		$userinfo = $db->fetch_first( 'select * from '.tname('admin').' where uid=' . $uid);
		include ROOT_PATH . '/views/admin/adminframe.php';
	}
	function index_action() {
		include ROOT_PATH . '/views/admin/index.php';
	}
	
	function login_action() {
		
		if (submitcheck ( 'commit' )) {
			$user = global_addslashes ( trim ( strip_tags ( $_POST ['username'] ) ) );
			$password = md52 ( $_POST ['password'] );
			$container = ' and username="' . $user . '" and passwd="' . $password . '" and usertype="adminuser"';
			
			$user_mod = new common ( 'admin' );
			$userinfo = $user_mod->GetOne ( $container );
			
			if ($userinfo) {
				$GLOBALS ['session']->set ('adminid',$userinfo ['uid']);
				$GLOBALS ['session']->set ('adminuser',$userinfo ['username']);
				echo '<SCRIPT LANGUAGE="JavaScript">
				<!--
					window.onload=function(){window.open("index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '","_top","")};
				//-->
				</SCRIPT>';
			} else {
				exit ( '<SCRIPT LANGUAGE="JavaScript">
				<!--
					alert("用户名或密码不正确!");
					parent.document.getElementById("user_pass").value="";
				//-->
				</SCRIPT>' );
			}
		} else {
			include ROOT_PATH . '/views/admin/login.php';
		}
	}
	function logout_action() {
		$GLOBALS ['session']->destroy ( array ('adminid' => '', 'adminuser' => '' ) );
		sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=login' );
	}
	
	
	//清空缓存
	function delcache_action()
	{
		$dofile=cleancache();
		if($dofile==='nowrite')
		{
			echo '<SCRIPT LANGUAGE="JavaScript">
			<!--
				parent.showDiglog("'.$GLOBALS['setting']['site_cache_dir'].'目录修改权限不足,请联系服务商");
			//-->
			</SCRIPT>';
		}
		elseif(!$dofile)
		{
			echo '<SCRIPT LANGUAGE="JavaScript">
			<!--
				parent.showDiglog("清空缓存失败,请在ftp上手动清除");
			//-->
			</SCRIPT>';
		}
		else
		{
			
			cleancache('php','data/cache/userinfo');
			cleancache('php','data/cache/usercount');
			echo '<SCRIPT LANGUAGE="JavaScript">
			<!--
				parent.showDiglog("清空缓存成功");
			//-->
			</SCRIPT>';
		}
	}
	//后台系统变量
	function setting_action() {
		
		$type = $_GET ['type'];
		switch ($type) {
			case 'site' :
				include ROOT_PATH . '/views/admin/setting_site.php';
				break;
			case 'seo' :
				include ROOT_PATH . '/views/admin/setting_seo.php';
				break;
			case 'login' :
				include ROOT_PATH . '/views/admin/setting_login.php';
				break;
			case 'email' :
				include ROOT_PATH . '/views/admin/setting_email.php';
				break;
			case 'template' :
				$dir = scandir ( ROOT_PATH . '/views' );
				foreach ( $dir as $k => $v ) {
					if (is_dir ( ROOT_PATH . '/views/' . $v ) && $v != '..' && $v != '.' && $v != 'admin' && $v != 'js') {
						if (is_file ( ROOT_PATH . '/views/' . $v . '/template.config.php' )) {
							include ROOT_PATH . '/views/' . $v . '/template.config.php';
							$tpldir [] = array ('tplname' => $v, 'thumb' => 'views/' . $v . '/' . $picture, 'author' => $author, 'desc' => $desc, 'info' => $info );
						}
					}
				}
				include ROOT_PATH . '/views/admin/setting_template.php';
				break;
			default :
				include ROOT_PATH . '/views/admin/setting_site.php';
				break;
		}
	}
	
	//处理系统提交数据
	function settingdata_action() {
		if (submitcheck ( 'commit' )) {
			unset($_POST['con']);
			unset($_POST['act']);
			$type = $_POST ['dotype'];
			unset ( $_POST ['commit'], $_POST ['dotype'] );
			
			$setting_mod = new common ( 'setting' );
			
			if ($_FILES ['site_logo'] ['name']) {
				$filename = explode ( '.', $_FILES ['site_logo'] ['name'] );
				$container = 'and variable="site_logo"';
				$data ['content'] = _upload ( 'site_logo', 'data/logo', 'logo.' . $filename [1] );
				$datalist = $setting_mod->GetOne ( $container );
				
				if ($datalist) {
					$setting_mod->UpdateData ( $data, $container );
				} else {
					$data ['variable'] = 'site_logo';
					$setting_mod->InsertData ( $data );
				}
			}
			$changeadmin='';
			foreach ( $_POST as $k => $v ) {
				if($k=='adminpath' && $v!=$GLOBALS['setting']['adminpath'])
				{
					$changeadmin=$v;
				}
				$container = 'and variable="' . $k . '"';
				$data ['content'] = strip_tags ( $v );
				$datalist = $setting_mod->GetOne ( $container );
				if ($datalist) {
					$updatesql [$k] = $v;
				} else {
					$insertsql [$k] = $v;
				}
			}
			
			if ($insertsql) {
				foreach ( $insertsql as $key => $val ) {
					$setting_mod->InsertData ( array ('variable' => $key, 'content' => $val ) );
				}
			}
			if ($updatesql) {
				foreach ( $updatesql as $key => $val ) {
					$setting_mod->UpdateData ( array ('content' => $val ), 'and variable="' . $key . '"' );
				}
			}
			if ($type == 'template') {
				$dofile = cleancache ( '', 'data/compile' );
				if (! $dofile) {
					echo '<SCRIPT LANGUAGE="JavaScript">
					<!--
						alert("模板更新成功,清空系统编译失败,请手动清除");
					//-->
					</SCRIPT>';
				} else {
					echo '<SCRIPT LANGUAGE="JavaScript">
					<!--
						alert("模板更新成功");
					//-->
					</SCRIPT>';
				}
			}
			deletef ( 'setting' );
			
			if(!empty($changeadmin))
			{
				echo '后台路径参数已修改，为了系统安全，请您继续做以下工作：<ul><li>1、连接ftp,将controls/'.$GLOBALS['setting']['adminpath'].'.class.php文件名修改为:'.$changeadmin.'.class.php</li><li>2、打开'.$changeadmin.'.class.php，将文件中'.$GLOBALS['setting']['adminpath'].'_controller替换为:'.$changeadmin.'_controller</li><li>3、修改完毕后,<a href="'.SITE_ROOT.'/?con='.$changeadmin.'" target="_top">重新进入后台</a></li></ul>';
			}
			else
			{
				if ($_REQUEST ['custom_url']) {
					sheader ( $_REQUEST ['custom_url'], 3, '修改成功', 'redirect', true );
				} else {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=setting&type=' . $type, 3, '修改成功', 'redirect', true );
				}
			}
		}
	}
	//会员列表
	function user_action() {
		$ext='';
		$container='';
		if ($_REQUEST ['username']) {
			$container .= ' and username like "%' . global_addslashes ( $_REQUEST ['username'] ) . '%"';
			$ext = '&username=' . $_REQUEST ['username'];
		}
		
		$showpage = array ('isshow' => 1, 'currentpage' => intval ( $_REQUEST ['page'] ), 'pagesize' => 20, 'url' => 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user' . $ext, 'example' => 3 );
		$user_mod = new common ( 'user' );
		$userlist = $user_mod->GetPage ( $showpage, $container );
		
		
		include ROOT_PATH . '/views/admin/user.php';
	}
	/**
	 *添加会员
	 */
	function usermodify_action() {
		
		$updateid = intval ( $_REQUEST ['updateid'] );
		$user_mod = new common ( 'user' );
		$user = array ();
		$userpath=!empty($_REQUEST['type'])?$_REQUEST['type']:'user';
		if (submitcheck ( 'commit' )) {
			
			$data ['username'] = trim ( strip_tags ( $_POST ['username'] ) );
			$data ['email'] = trim ( strip_tags ( $_POST ['email'] ) );
			$data ['location'] = trim ( strip_tags ( $_POST ['location'] ) );
			$usertype = array_keys ( $GLOBALS ['usertype'] );
			
			if ($updateid > 0) {
				if (! empty ( $_POST ['password'] )) {
					$data ['passwd'] = md52 ( $_POST ['password'] );
				}
				if ($user_mod->UpdateData ( $data, 'and user_id=' . $updateid )) {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user&type='.$userpath, 3, '修改成功', 'redirect', true );
				} else {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user&type='.$userpath, 3, '修改失败', 'redirect', true );
				}
			} else {
				$data ['updatetime'] = time ();
				$data ['passwd'] = md52 ( $_POST ['password'] );
				if ($user_mod->InsertData ( $data )) {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user&type='.$userpath, 3, '添加成功', 'redirect', true );
				}
			}
		} else {
			if ($updateid) {
				$user = $user_mod->GetOne ( 'and user_id=' . $updateid );
			
			}
			include ROOT_PATH . '/views/admin/'.$userpath.'_form.php';
		}
	}
	//管理员列表
	function manageuser_action() {
		$ext='';
		$container='';
		if ($_REQUEST ['username']) {
			$container .= ' and username like "%' . global_addslashes ( $_REQUEST ['username'] ) . '%"';
			$ext = '&username=' . $_REQUEST ['username'];
		}
		
		$showpage = array ('isshow' => 1, 'currentpage' => intval ( $_REQUEST ['page'] ), 'pagesize' => 20, 'url' => 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=admin' . $ext, 'example' => 3 );
		$user_mod = new common ( 'admin' );
		$userlist = $user_mod->GetPage ( $showpage, $container );
		
		
		include ROOT_PATH . '/views/admin/manageuser.php';
	}
	/**
	 *添加会员
	 */
	function manageusermodify_action() {
		
		$updateid = intval ( $_REQUEST ['updateid'] );
		$user_mod = new common ( 'admin' );
		$user = array ();
		if (submitcheck ( 'commit' )) {
			
			$data ['username'] = trim ( strip_tags ( $_POST ['username'] ) );
			$data ['email'] = trim ( strip_tags ( $_POST ['email'] ) );
			$usertype = array_keys ( $GLOBALS ['usertype'] );
			
			if ($updateid > 0) {
				if (! empty ( $_POST ['password'] )) {
					$data ['passwd'] = md52 ( $_POST ['password'] );
				}
				if ($user_mod->UpdateData ( $data, 'and uid=' . $updateid )) {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user&type=manageuser', 3, '修改成功', 'redirect', true );
				} else {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user&type=manageuser', 3, '修改失败', 'redirect', true );
				}
			} else {
				$data ['updatetime'] = time ();
				$data ['passwd'] = md52 ( $_POST ['password'] );
				if ($user_mod->InsertData ( $data )) {
					sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=user&type=manageuser', 3, '添加成功', 'redirect', true );
				}
			}
		} else {
			if ($updateid) {
				$user = $user_mod->GetOne ( 'and uid=' . $updateid );
			
			}
			include ROOT_PATH . '/views/admin/manageuser_form.php';
		}
	}

	//画板管理
	function board_action()
	{
		$data_mod=new common('board');
		$id=intval($_REQUEST['id']);
		if($_REQUEST['type']=='del' && $id>0)
		{
			$goods_mod=new common('pin');
			$data_mod->DeleteData('1 and board_id='.$id);
			$goods_mod->DeleteData('1 and board_id='.$id);
			sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=board', 3, '删除成功', 'redirect', true );
		}
		else
		{
			$container = "";
			if(!empty($_REQUEST['keyword']))
			{
				$container.=' and title like "%'.trim(strip_tags($_REQUEST['keyword'])).'%"';
			}
			$showpage=array('isshow'=>1,'currentpage'=>intval($_REQUEST['page']),'pagesize'=>20,'url'=>'index.php?con='.$GLOBALS['setting']['adminpath'].'&act=board','example'=>2);
			$infolist=$data_mod->GetPage($showpage,$container,"","","ORDER BY board_id DESC");
			include ROOT_PATH.'/views/admin/board.php';
		}
	}
	
	
	//分类管理
	function cate_action() {
		$cate_mod = new common ( 'catelist' );
		$id=intval($_REQUEST['id']);
		$container='and level=1';
		
		$key=trim(strip_tags($_REQUEST['keyword']));
		if(!empty($key))
		{
			$container=' and catename like "%'.$key.'%"';
		}
		if($_REQUEST['type']=='del' && $id>0)
		{
			$cate_mod->DeleteData('1 and id='.$id);
			$cate_mod->DeleteData('1 and parentid='.$id);
			sheader ( 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=cate', 3, '删除成功', 'redirect', true );
		}
		else
		{
			$catelist = array ();
			$catelist=$cate_mod->GetPage(array('isshow'=>0),$container,'',array(),'order by sortorder desc');
			include ROOT_PATH . '/views/admin/cate.php';
		}
	}
	/**
	 *添加分类
	 */
	function catemodify_action() {
		$cate_mod = new common ( 'catelist' );
		$updateid = $_REQUEST ['updateid'];
		$cate = array ();
		if (submitcheck ( 'commit' )) {
			
			$data ['othername'] = trim ( strip_tags ( $_POST ['othername'] ) );
			$data ['categroup'] = trim ( strip_tags ( $_POST ['categroup'] ) );
			$data ['customurl'] = trim ( strip_tags ( $_POST ['customurl'] ) );
			$data ['keywords'] = trim ( strip_tags ( $_POST ['keywords'] ) );
			foreach($_REQUEST ['cate2'] as $v)
			{
				if($v>0)
				{
					$requestcate=$v;
				}
			}
			$data ['parentid'] = intval($requestcate);
			
			if ($updateid > 0) {
				$data ['catename'] = trim ( strip_tags ( $_POST ['catename'] ) );
				$data ['cateindex'] = trim ( strip_tags ( $_POST ['cateindex'] ) );
				$affid=$cate_mod->UpdateData ( $data, 'and id=' . $updateid );
			} else {
				$catename = explode(',',trim ( strip_tags ( $_POST ['catename'] ) ));
				if(count($catename)>1)
				{
					foreach($catename as $k=>$v)
					{
						$data['catename']=trim($v);
						$data['cateindex']=Pinyin($data['catename']);
						$affid = $cate_mod->InsertData ( $data );
					}
				}
				else
				{
					$data ['catename'] = trim ( strip_tags ( $_POST ['catename'] ) );
					$data ['cateindex'] = trim ( strip_tags ( $_POST ['cateindex'] ) );
					$affid = $cate_mod->InsertData ( $data );
				}
			}
			deletef ( 'cate' );
			deletef ( 'pcate' );
			if($affid>0)
			{
				$c=$cate_mod->GetPage(array('isshow'=>0),'');
				//重新更新分类
				foreach($c as $k=>$v)
				{
					$mcdata['layer']=implode('-',$this->_chuck($v['id']));
					$level=$cate_mod->GetOne('and id='.$v['parentid']);
					$mcdata['level']=intval($level['level'])+1;
					$cate_mod->UpdateData ( $mcdata, 'and id=' . $v['id'] );
					$this->filelist=array();
				}
			}
			echo "<SCRIPT LANGUAGE='JavaScript'>parent.parseMyCateData();</SCRIPT>";
			exit;
		} else {
			if ($updateid) {
				$cate = $cate_mod->GetOne ( 'and id=' . $updateid );
				
			}
			include ROOT_PATH . '/views/admin/cate_ajax_form.php';
		}
	}
	
	
	//友情链接
	function link_action()
	{
		$link=new common('link');
		$showpage=array('isshow'=>1,'currentpage'=>intval($_REQUEST['page']),'pagesize'=>20,'url'=>'index.php?con='.$GLOBALS['setting']['adminpath'].'&act=link','example'=>2);
		$linklist=$link->GetPage($showpage,"","","","ORDER BY sortorder DESC");
		include ROOT_PATH.'/views/admin/link.php';
	}
	
	//友情链接修改
	function linkmodify_action()
	{
		$updateid=$_REQUEST['updateid'];
		$link_mod=new common('link');
		if(submitcheck('commit'))
		{
			$data['title'] 		= trim(strip_tags($_POST['title']));
			$data['url']   		= trim($_POST['url']);
			$data['decs']  		= trim(strip_tags($_POST['decs']));
			$data['type']  		= intval($_POST['type']);
			$data['sortorder']  = intval($_POST['sortorder']);
			
			if($_FILES['thumb']['name'])
			{
				$data['thumb']=_upload('thumb','data/upload/link');
			}
			if($updateid>0)
			{
				if($link_mod->UpdateData($data,'and id='.$updateid))
				{
					deletef('link');
					echo "<SCRIPT LANGUAGE='JavaScript'>var objdata={};objdata.dotype='update';objdata.id='$updateid';objdata.title='".global_addslashes( $data ['title'], 1 )."';objdata.url='".global_addslashes ( $data ['url'], 1 )."';objdata.sortorder='". $data['sortorder']."';objdata.thumb='". $data['thumb']."'; parent.parseMysitecateData(objdata);</SCRIPT>";
				}
			}
			else
			{
				if($id=$link_mod->InsertData($data))
				{
					deletef('link');
					echo "<SCRIPT LANGUAGE='JavaScript'>var objdata={};objdata.dotype='add';objdata.id='$id';objdata.title='".global_addslashes( $data ['title'], 1 )."';objdata.url='".global_addslashes ( $data ['url'], 1 )."';objdata.sortorder='". $data['sortorder']."';objdata.thumb='". $data['thumb']."'; parent.parseMysitecateData(objdata);</SCRIPT>";
					
				}
			}
		}
		else
		{
			if($updateid)
			{
				$link=$link_mod->GetOne('and id='.$updateid);
			}
			include ROOT_PATH.'/views/admin/link_ajax_form.php';
		}
	}

	//图片列表
	function listgoods_action() 
	{
		$container = "";
		if(!empty($_REQUEST['keyword']))
		{
			$container.=' and raw_text like "%'.trim(strip_tags($_REQUEST['keyword'])).'%"';
		}
		$ext="";
		$data_mod = new common ( 'pin' );
		$showpage = array ('isshow' => 1, 'currentpage' => $_REQUEST ['page'], 'pagesize' => 10, 'url' => 'index.php?con=' . $GLOBALS ['setting'] ['adminpath'] . '&act=listgoods'.$ext, 'example' => 2 );
		$infolist = $data_mod->GetPage ( $showpage, $container, "", array (), "order by pin_id desc" );
		
		include ROOT_PATH . '/views/admin/goods.php';
	}
	//图片查看
	function showfile_action()
	{
		global $db,$app;
		$fileid=intval($_GET['fileid']);
		if($fileid>0)
		{
			$file=$db->fetch_first("select bidcms_key from ".tname('file')." where file_id=".$fileid);
		}
		if(!empty($file['bidcms_key']))
		{
			echo '<img src="'.$app['settings']['imgHosts']['hbimg'].$file['bidcms_key'].'"/>';
		}
	}
	//分类对应查看
	function showcate_action()
	{
		global $cate;
		$showindex=intval($_GET['si']);
		echo '<h4>Ctrl+F 查找相对应的分类,将红色加粗的填写到要修改的地方</h4>';
		echo '<ul>';
		if($showindex>0)
		{
			foreach($cate as $k=>$v)
			{
				echo '<li><strong style="color:#ff0000">'.$v['cateindex'].'</strong>-'.$v['catename'].'</li>';
			}
		}
		else
		{
			foreach($cate as $k=>$v)
			{
				echo '<li><strong style="color:#ff0000">'.$v['id'].'</strong>-'.$v['catename'].'</li>';
			}
		}
		echo '</ul>';
	}
	//画板对应查看
	function showboard_action()
	{
		global $db;
		echo '<h4>Ctrl+F 查找相对应的画板,将红色加粗的填写到要修改的地方</h4>';
		
		$query=$db->query("select board_id,title from ".tname('board'));
		echo '<ul>';
		while($v=$db->fetch_array($query))
		{
			echo '<li><strong style="color:#ff0000">'.$v['board_id'].'</strong>-'.$v['title'].'</li>';
		}
		echo '</ul>';
	}

	function plugins_action()
	{
		$plugins_mod=new common('plugins');
		$plugins=$plugins_mod->GetPage();
		
		foreach($plugins as $k=>$v)
		{
			$plugins[$k]['pluginsname']=unserialize($plugins[$k]['pluginsname']);
		}
		
		include ROOT_PATH . '/views/admin/plugins.php';
	}
	function importplugins_action()
	{
		$path=ROOT_PATH.'/plugins';
		$dir=scandir($path);
		
		foreach($dir as $k=>$v)
		{
			if($v!='.' && $v!='..')
			{	
				$newv=ROOT_PATH.'/plugins/'.$v.'/config.php';
				if(is_file($newv))
				{
					include($newv);
					$plugins[$installinfo['url']]=$installinfo;
				}
			}
		}
		
		include ROOT_PATH . '/views/admin/pluginsimport.php';
	}
	function pluginsmodify_action()
	{
		$plugins_mod=new common('plugins');
		$updateid=intval($_REQUEST['updateid']);
		if(submitcheck('commit'))
		{
			$d['title']=trim(strip_tags($_REQUEST['title']));
			$d['url']=trim(strip_tags($_REQUEST['url']));
			$d['isshow']=intval($_REQUEST['isshow']);
			$d['showtype']=intval($_REQUEST['showtype']);
			$data['isok']=intval($_REQUEST['isok']);
			$data['pluginsname']=serialize($d);
			
			if ($updateid > 0) {
				if ($plugins_mod->UpdateData ( $data, 'and id=' . $updateid )) {
					deletef('plugins');
					echo "<SCRIPT LANGUAGE='JavaScript'>parent.parseMyCateData();</SCRIPT>";
				}
			} else {
				if ($id = $plugins_mod->InsertData ( $data )) {
					deletef('plugins');
					echo "<SCRIPT LANGUAGE='JavaScript'>parent.parseMyCateData();</SCRIPT>";
				}
			}
		}
		else
		{
			if($updateid)
			{
				$plugins=$plugins_mod->GetOne('and id='.$updateid);
				$plugins['pluginsname']=unserialize($plugins['pluginsname']);
			}
			
			include ROOT_PATH . '/views/admin/plugins_ajax_form.php';
		}
	}
	
	
	
	
	
	/**
	*导航栏
	*/
	function listnav_action()
	{
		$nav = new common('nav');
		$navinfo =$nav->GetPage(array('isshow'=>0));
		
		include ROOT_PATH.'/views/admin/nav.php';
	}
	
	/**
	*导航更新
	*/
	function navmodify_action()
	{
		$updateid=$_REQUEST['updateid'];
		$nav_mod=new common('nav');
		if(submitcheck('commit'))
		{
			$data['navname']  = trim(strip_tags($_POST['navname']));
			$data['content']  = trim($_POST['content']);
			$data['type']  	  = intval($_POST['type']);
			$data['location'] = intval($_POST['location']);
			$data['sotr']     = intval($_POST['sotr']);
			$data['target']   = intval($_POST['target']);
			deletef('topnav');
			if($updateid>0)
			{
				if($nav_mod->UpdateData($data,'and id='.$updateid))
				{
					//echo "<SCRIPT LANGUAGE='JavaScript'>var objdata={};objdata.dotype='update';objdata.id='$updateid';objdata.navname='".global_addslashes( $data ['navname'], 1 )."';objdata.content='".global_addslashes ( $data ['content'], 1 )."';objdata.type='". $data['type']."';objdata.location='". $data['location']."'; parent.parseMynavData(objdata);</SCRIPT>";
					echo "<SCRIPT LANGUAGE='JavaScript'>parent.parseMynavData();</SCRIPT>";
				}else{
					echo "<script>alert('数据未发生变化!');</script>";
				}
			}
			else
			{
				if($id=$nav_mod->InsertData($data))
				{
					//echo "<SCRIPT LANGUAGE='JavaScript'>var objdata={};objdata.dotype='add';objdata.id='$id';objdata.title='".global_addslashes( $data ['title'], 1 )."';objdata.url='".global_addslashes ( $data ['url'], 1 )."';objdata.sortorder='". $data['sortorder']."';objdata.thumb='". $data['thumb']."'; parent.parseMysitecateData(objdata);</SCRIPT>";
					echo "<SCRIPT LANGUAGE='JavaScript'>parent.parseMynavData();</SCRIPT>";
				}
			}
		}
		else
		{
			if($updateid)
			{
				$nav=$nav_mod->GetOne('and id='.$updateid);
			}
			include ROOT_PATH.'/views/admin/nav_ajax_form.php';
		}		
	}

	//ajax修改添加处理
	function admin_ajax_action() {
		$key = empty ( $_GET ['primarykey'] ) ? 'id' : $_GET ['primarykey'];
		
		if (empty ( $_GET ['table'] )) {
			echo '参数有误';
			exit ();
		} elseif (empty ( $_GET ['field'] )) {
			echo '字段为空';
			exit ();
		} 

		elseif (intval ( $_GET ['primary'] ) == 0) {
			echo '主键不能为0';
			exit ();
		} 

		else {
			$obj = new common ( $_GET ['table'] );
			
			$data [$_GET ['field']] = trim ( strip_tags ( $_GET ['val'] ) );
			$container = "and " . $key . "=" . intval ( $_GET ['primary'] );
			$this->_cachedel ();
			$goods = $obj->GetOne ( $container );
			
			if ($goods && $obj->UpdateData ( $data, $container, true )) {
				exit ( '1' );
			} else {
				exit ( 'failed' );
			}
		}
	}
	//ajax删除处理
	function admin_delete_action() {
		$key = empty ( $_GET ['key'] ) ? 'id' : $_GET ['key'];
		
		if (empty ( $_GET ['table'] )) {
			echo '参数有误';
			exit ();
		} elseif (empty ( $_GET ['val'] )) {
			echo '字段值为空';
			exit ();
		} else {
			$val = global_addslashes ( $_GET ['val'] );
			
			$container = "and $key='" . trim ( $val ) . "'";
			
			$obj = new common ( $_GET ['table'] );
			$this->_cachedel ($table);
			$goods = $obj->GetOne ( $container );
			
			if ($goods && $obj->DeleteData ( '1 ' . $container )) {
				exit ( '1' );
			} else {
				exit ( 'failed' );
			}
		}
	
	}
	
	//测试邮件
	function testmail_action()
	{
		include ROOT_PATH.'/models/email.php';
		$email['smtp']=$_POST['test_email_smtp'];
		$email['port']=$_POST['test_email_port'];
		$email['account']=$_POST['test_email_user'];
		$email['pass']=$_POST['test_email_password'];
		$email['email']=$_POST['test_email'];
		$email_mod=new email($email);
		if($email_mod->send($_POST['get_email'],$email['email'],'测试标题','您好，这是'.$GLOBALS['title'].'一封测试邮件'))
		{
			echo "<script language='javascript'>alert('发送成功');</script>";
		}
		else
		{
			echo "<script language='javascript'>alert('发送失败');</script>";
		}
	}
	

	/*-------------------------------------系统函数----------------------------------------------------------*/
	function _data2data($table,$url,$clear=false)
	{
		include ROOT_PATH.'/inc/curl.class.php';
		$curl=new curl();
		$content=$curl->get($url);
		
		if($content)
		{
			$data = json_decode($content);		
			$fields=array_keys((array)$data[0]);
			
			if(isset($data[0]->id) && isset($data[0]->transkey))
			{
				$site_mod=new common($table);
				if($clear)
				{
					$site_mod->ClearData();
				}
				$rows = $site_mod->GetPage(array('issehow'=>0),'and transkey>0');
				
				$transkey_arr = array();
				foreach($rows AS $key =>$val)
				{
					if($val['transkey']>0)
					{
						$transkey_arr[$val['transkey']] = $val['id'];	
					}
				}
				
				$f=(array)$data[0];
				if($clear==false)
				{
					unset($f['id']);
				}
				$inser_sql = 'INSERT INTO '.tname($table).' ( `'.implode('`,`',array_keys($f)).'`) values ';
				foreach($data AS $key => $val)
				{	
					$val = (array)$val;
					$val = global_addslashes($val);
					$val=global_addslashes($val);
					if(isset($transkey_arr[$val['id']]))
					{	
						$val['transkey']=$val['id'];
						foreach($val as $k=>$v)
						{
							$val[$k]=charset_encode($val[$k],$GLOBALS['charset'],'utf-8');
						}
						unset($val['sitename']);
						
						$site_mod->UpdateData($val, "  AND id= ".$transkey_arr[$val['id']]);					
													
					}else{
						if($clear==false)
						{
							unset($val['id']);
						}
						foreach($val as $k=>$v)
						{
							$val[$k]=charset_encode($val[$k],$GLOBALS['charset'],'utf-8');
						}
						$inser_ssql[]="('".implode("','",$val)."')";
					}
				}
				
				if($inser_ssql)
				{
					$inser_sql.=implode(',',$inser_ssql);
					if($inser_sql)
					{
						$GLOBALS['db']->query($inser_sql);
					}
				}
				return 'true';
			}
			else{
				
				return 'false';
			}
			
		}
		return 'false';
	}
	function _checkcode($code) {
		include ROOT_PATH . './models/imgcode.php';
		$imgcode_mode = new Helper_ImgCode ();
		return $imgcode_mode->isValid ( $code );
	}
	function _cachedel ($table)
	{
		$delarr=array('catelist'=>'cate','brand'=>'brand');
		if(in_array($table,array_keys($delarr)))
		{
			deletef($delarr[$table]);
		}
	}
	
	function _chuck($id)
	{
		$sql="select parentid,id from ".tname('catelist')." where id=".$id;
		$pid=$GLOBALS['db']->fetch_first($sql);
		
		$this->filelist[]=$pid['id'];	
		if($pid['parentid']>0)
		{
			$this->_chuck($pid['parentid']);
		}
		
		if($this->filelist)
		{
			krsort($this->filelist);
			return $this->filelist;
		}
	}
	
	function _pchuck($id)
	{
		$sql="select parentid,id from ".tname('pcate')." where id=".$id;
		$pid=$GLOBALS['db']->fetch_first($sql);
		
		$this->filelist[]=$pid['id'];	
		if($pid['parentid']>0)
		{
			$this->_pchuck($pid['parentid']);
		}
		
		if($this->filelist)
		{
			krsort($this->filelist);
			return $this->filelist;
		}
	}
	//取出子分类
	function _child($id)
	{
		$child=array();
		if($id>0)
		{
			$sql="select id,catename from ".tname('catelist')." where concat('-',layer,'-') like '%-".$id."-%' order by layer desc";
			$query=$GLOBALS['db']->query($sql);
			
			while($rows=$GLOBALS['db']->fetch_array($query))
			{
				$child[$rows['id']]=$rows['catename'];
			}
		}
		return $child;
	}
}  