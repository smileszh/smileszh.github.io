var posts=["posts/16088ba7.html","posts/56308c9.html","posts/65ebd0df.html","posts/ca675cd4.html","posts/b21fca77.html","posts/b536050b.html","posts/7acd0447.html","posts/5c21bb3.html","posts/839f439e.html","posts/572fa456.html","posts/cc9b0903.html","posts/7aba474f.html","posts/2ea551a.html","posts/7218365e.html","posts/80184fae.html","posts/cee7e62d.html","posts/b3231219.html","posts/e7e9fba0.html","posts/1085fed1.html","posts/795e1915.html","posts/df5af0f1.html","posts/53f493a2.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};