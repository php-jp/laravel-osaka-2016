deploy:
	git subtree push --prefix public . gh-pages
	git push origin gh-pages