# Starter files for MP3

## Setup
Use the following commands in your vagrant development environment to get this up and running
```bash
git clone --bare https://github.com/uiuc-web-programming/mp3_starter.git
cd mp3_starter.git
git push --mirror https://github.com/your-github-username/mp3.git
# Mirror-push to your mp3 repository. Use your github username in the URL. Change the URL if you're using bitbucket.
cd ..
rm -rf mp3_starter.git

git clone https://github.com/your-github-username/mp3.git
cd mp3
npm install
bower install
grunt compass
grunt uglify
grunt
```

You can leave this command running in the background while development for livereloading:

```bash
grunt
```
## Sources
- http://foundation.zurb.com/forum/posts/37335-overloading-a-row-with-columns
- https://css-tricks.com/snippets/css/scale-on-hover-with-webkit-transition/
- https://docs.angularjs.org/api/ng/filter/filter
- https://code.angularjs.org/1.3.13/docs/api/ng/filter/orderBy
- http://foundation.zurb.com/sites/docs/forms.html