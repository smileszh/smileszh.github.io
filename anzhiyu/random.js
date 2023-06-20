var posts=["posts/56308c9.html","posts/cc9b0903.html","posts/5c21bb3.html","posts/7aba474f.html","posts/7218365e.html","posts/cee7e62d.html","posts/e7e9fba0.html","posts/b3231218.html","posts/df5af0f1.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img01.anheyu.com/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱"},{"name":"小志IT知识库","hundredSuffix":"","link":"https://www.czfq99.cn","avatar":"https://www.czfq99.cn/upload/2022/08/12.jpg","descr":"一个专注于安全领域的全栈博客"},{"name":"Ganzhe","hundredSuffix":"","link":"https://ganzhe2028.github.io","avatar":"https://image.anheyu.cn/useruploads/151/2023/05/12/645dac23c60a2.jpg","descr":"顺其自然，持之以恒"},{"name":"陌颜小屋","hundredSuffix":"","link":"https://blog.asever.top/","avatar":"https://bu.dusays.com/2022/10/29/635d11ccac58c.png","descr":"愿永不忘初心！"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"毕少侠-Hexo-Anzhiyu","link":"https://hexo.geekswg.top/","avatar":"https://hexo.geekswg.top/imgs/avatar.webp","descr":"毕少侠也在江湖"},{"name":"Boris Zhao","link":"https://www.boris1993.com/","avatar":"https://www.boris1993.com/images/favicon/avatar.jpeg","descr":"Boris has arrived!"},{"name":"Cédric","hundredSuffix":"","link":"https://www.cedricscherer.com/","avatar":"https://d33wubrfki0l68.cloudfront.net/3257803e212d3845f4c787f4da662c67bcb15cf7/669cf/img/cedric-headshot-round.png","descr":"Data Visualization Designer"},{"name":"大江南北","hundredSuffix":"","link":"https://djnb.gitee.io/","avatar":"https://djnb.gitee.io/medias/avatar.jpg"},{"name":"王进的个人网站","hundredSuffix":"","link":"https://www.jingege.wang/","avatar":"https://www.jingege.wang/CV/images/jingege.jpg","descr":"NO PAINS, NO GAINS"},{"name":"生信之家","hundredSuffix":"","link":"https://www.bioinfo.host/","avatar":"https://www.bioinfo.host/authors/admin/avatar_hua4e8f5641eda2fd8ab725e3c30a5d21e_745354_270x270_fill_q75_lanczos_center.jpg","descr":"知行合一，与自已和解"},{"name":"朝云老哥","hundredSuffix":"","link":"https://chaoyuny.github.io/","avatar":"https://chaoyuny.github.io/medias/avatar.png","descr":"Flying"},{"name":"hope","hundredSuffix":"","link":"http://tiramisutes.github.io/","avatar":"https://raw.githubusercontent.com/wiki/tiramisutes/blog_image/Wechat.jpg","descr":null},{"name":"PLoB","hundredSuffix":"","link":"https://www.plob.org/","avatar":"https://static.plob.org/assets/logo/logo.png","descr":"生物信息相关领域“图书馆”"},{"name":"生信菜鸟团","hundredSuffix":"","link":"http://www.bio-info-trainee.com/","avatar":null,"descr":null},{"name":"学术咖","hundredSuffix":"","link":"http://www.wuchangsong.com/","avatar":"http://www.wuchangsong.com/wp-content/themes/twentyseventeen/assets/images/header.jpg","descr":null},{"name":"十年的生信","hundredSuffix":"","link":"https://www.dzbioinformatics.com/","avatar":"https://www.dzbioinformatics.com/wp-content/themes/twentyten/images/headers/berries.jpg","descr":"勿忘初心，砥砺前行"},{"name":"陈连福的生信博客","hundredSuffix":"","link":"http://www.chenlianfu.com/","avatar":"http://www.chenlianfu.com/","descr":null},{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/docs/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };