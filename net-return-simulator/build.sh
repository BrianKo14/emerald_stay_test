# Build Angular project
ng build --base-href="https://brianko14.github.io/emerald_stay_test/"

# Move build to index directory
mv dist/net-return-simulator/browser/* dist/net-return-simulator/
rm -r dist/net-return-simulator/browser

# Deploy
npx angular-cli-ghpages --dir=dist/net-return-simulator