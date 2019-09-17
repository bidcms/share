// 导航栏配置文件
var outlookbar=new outlook();
var t;

t=outlookbar.addtitle('管理首页','管理首页',1)
outlookbar.additem('管理首页',t,'index.php?con='+adminpath+'&act=main')

t=outlookbar.addtitle('常用操作','管理首页',1)
outlookbar.additem('图片管理',t,'index.php?con='+adminpath+'&act=listgoods')

t=outlookbar.addtitle('站点设置','站点设置',1)
outlookbar.additem('站点信息',t,'index.php?con='+adminpath+'&act=setting&type=site')
outlookbar.additem('SEO设置',t,'index.php?con='+adminpath+'&act=setting&type=seo')
outlookbar.additem('邮箱设置',t,'index.php?con='+adminpath+'&act=setting&type=email')
outlookbar.additem('模板设置',t,'index.php?con='+adminpath+'&act=setting&type=template')
outlookbar.additem('登录设置',t,'index.php?con='+adminpath+'&act=setting&type=login')


t=outlookbar.addtitle('会员管理','会员管理',1)
outlookbar.additem('会员管理',t,'index.php?con='+adminpath+'&act=user')
outlookbar.additem('添加会员',t,'index.php?con='+adminpath+'&act=usermodify')

t=outlookbar.addtitle('管理员管理','会员管理',1)
outlookbar.additem('管理员管理',t,'index.php?con='+adminpath+'&act=manageuser')
outlookbar.additem('添加管理员',t,'index.php?con='+adminpath+'&act=manageusermodify')


t=outlookbar.addtitle('图片管理','数据信息',1)
outlookbar.additem('分类管理',t,'index.php?con='+adminpath+'&act=cate')
outlookbar.additem('图片管理',t,'index.php?con='+adminpath+'&act=listgoods')
outlookbar.additem('画板管理',t,'index.php?con='+adminpath+'&act=board')

document.write('<script language="javascript" src="'+site_root+'/data/nav.js"></script>');