echo "Pulling repo"
git pull

echo "Removing previous app"
pm2 delete GithubAutoDeployer

echo "Updating packages"
npm install

echo "Restarting app"
pm2 start --name "GithubAutoDeployer" node index.js