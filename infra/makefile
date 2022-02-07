.PHONY: down
down:
	docker-compose down -v

.PHONY: up
up:
	docker-compose build db
	docker-compose run --rm wait-db

	cat ./schema.sql | docker exec -i test_db /usr/bin/mysql -u root --password=secret testing
	yarn db:seed

.PHONY: reset
reset:
	cat ./schema.sql | docker exec -i test_db /usr/bin/mysql -u root --password=secret testing
	yarn db:seed