PROJECT?=github.com/nomad/front
APP?=nomadfront
PORT_CONTAINER?=80
PORT_APP?=80
HOST?=mvp.nomad.space

RELEASE?=0.3.0
COMMIT?=$(shell git rev-parse --short HEAD)
BUILD_TIME?=$(shell date -u '+%Y-%m-%d_%H:%M:%S')
CONTAINER_IMAGE?=nomad/${APP}

GOOS?=linux
GOARCH?=amd64

front_run:
	npm run dev

clean:
	rm -rf dist/*

build: clean
	npm install && npm run build

container: build
	docker build -t $(CONTAINER_IMAGE):$(RELEASE) .

push: container
	docker push $(CONTAINER_IMAGE):$(RELEASE)

run:
	docker stop $(CONTAINER_IMAGE):$(RELEASE) || true && docker rm $(CONTAINER_IMAGE):$(RELEASE) || true
	docker run --name ${APP} -p ${PORT_CONTAINER}:${PORT_APP} --rm $(CONTAINER_IMAGE):$(RELEASE)

test:
	go test -v -race ./...


# minikube:
minikube: push
	for t in $$(find ./kubernetes -type f -name "*.yaml"); do \
        cat $$t | \
        	sed -E "s/\{\{(\s*)\.Release(\s*)\}\}/$(RELEASE)/g" | \
        	sed -E "s/\{\{(\s*)\.ServiceName(\s*)\}\}/$(APP)/g" | \
        	sed -E "s/\{\{(\s*)\.ServicePort(\s*)\}\}/$(PORT_CONTAINER)/g" | \
        	sed -E "s/\{\{(\s*)\.ServiceHost(\s*)\}\}/$(HOST)/g" | \
        	sed -E "s/\{\{(\s*)\.AppPort(\s*)\}\}/$(PORT_APP)/g"; \
        echo $$"\n"---; \
    done > tmp.yaml;
	kubectl apply -f tmp.yaml

minikube-update:
	kubectl patch deployment ${APP} -p "{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"date\":\"`date +'%s'`\"}}}}}"
	#kubectl patch service ${APP} -p "{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"date\":\"`date +'%s'`\"}}}}}"
	kubectl apply -f tmp.yaml
	#kubectl patch ingress ${APP} -p "{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"date\":\"`date +'%s'`\"}}}}}"
