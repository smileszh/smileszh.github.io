var posts=["posts/56308c9.html","posts/cc9b0903.html","posts/5c21bb3.html","posts/7218365e.html","posts/7aba474f.html","posts/cee7e62d.html","posts/df5af0f1.html","posts/e7e9fba0.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};