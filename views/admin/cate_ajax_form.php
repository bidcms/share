<iframe src="" name="catemodify" style="display:none"></iframe>

<SCRIPT LANGUAGE="JavaScript">
<!--
	function checkform(theform)
	{
		if(theform.catename.value=='')
		{
			alert('分类名不能为空');
			return false;
		}
	}
//-->
</SCRIPT>
<FORM METHOD="POST" ACTION="index.php" onsubmit="return checkform(this);" target="catemodify">
<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS["setting"]["adminpath"];?>">
<INPUT TYPE="hidden" NAME="act" value="catemodify">
<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $cate['id'];?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<table width="100%" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_form">
<tr>
<td width="70px" class="left_title_1"><span class="left-title">上级分类</span></td>
<td>
<span id="morecate2" >
	<span id="morecate2-level-1">
	<select name="cate2[]" class="tempcate"  onchange="getselectcate('morecate2',this,'cate2[]','tempcate');" >
			<?php if($cate['parentid']){?>
			<option value="<?php echo $cate['parentid'];?>" selected><?php echo $GLOBALS['cate'][$cate['parentid']]['catename']; ?></option>
			<?php }?>
			<option value="0">顶级分类</option>
			<?php  foreach($GLOBALS['pcate'] AS $key => $val){  ?>	
			<option value="<?php  echo  $val['id']; ?>" <?php   if($val['id'] == $_REQUEST['cate'] || $val['id'] ==$cate['parentid']){ echo "selected";  }  ?>  ><?php  echo  str_repeat('　',$val['level']); ?><?php  echo  $val['catename']; ?></option>		
			<?php  }  ?>
		</select>
	</span> 
</span>
</td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">分组</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="categroup"   id="categroup"   value="<?php echo $cate['categroup'];?>"> 顶级分类请填定数字</td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">分类名</span></td>
<td><textarea style="width:200px;height:60px;" class="input-text" NAME="catename"  id="catename"  ><?php echo $cate['catename'];?></textarea><br/>多个请用英文逗号隔开，多个添加时主键可不填为名称的中文拼音。别名，关键字，链接无效请单个修改。</td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">分类主键</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="cateindex"   id="cateindex"   value="<?php echo $cate['cateindex'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">别名</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="othername"   id="othername"   value="<?php echo $cate['othername'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">关键字</span></td>
<td><textarea style="width:200px;height:30px;" class="input-text" NAME="keywords"  id="keywords"  ><?php echo $cate['keywords'];?></textarea></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">自定义链接</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="customurl"   id="customurl"   value="<?php echo $cate['customurl'];?>"></td>
</tr>
<td colspan="2" align="center"><INPUT TYPE="submit" value="提交" class="button"></td>
</tr>
</table>
</FORM>