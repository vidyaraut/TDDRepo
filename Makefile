test:
	mocha -u tdd "test/*.mock.js"
.PHONY:	test
test-docs:
	make test REPORTER=doc \
	> docs/test.html