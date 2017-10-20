# Introduction

# Topics

* Demo
* Architecture
* Build System
* Docker
* Geb-Tests
* Docker extended
* Q & A
 
# Demo

* Integrate video into presentation that shows a "typicall" use-case
  * Create favourite list for demo
  * Create Injector with children and add it to favourite list
  * Create a Test-Step using that injector and plan it for tomorrow
  * Go to Resource planner and move around the test-step
  * Add more parts / and equipment to favourite list  
  * Go to component assembly 

# Architecture 

* AngularJS frontend that communicates via REST with our Backend
* Java Backened / Service Oriented Architecture (SOA) / HQL for Access to ODS Server

# Build System

* Gradle
* Grunt for frontend (integrated in gradle build)
* Deployment to JBoss via Plugin (Management API)
* UI-Testing (Gradle Test Runner!!)

# Docker

* Docker base image with JBoss and MongoDB
* Docker image (Dockerfile) create with docker plugin 
* Docker plugin port exposure 
* feature branch naming strategy (teamcity configuration)

# Geb-Tests

* Create and cleanup data infrastructure 
* Firefox / headless chrome
* Problems: Running 4 tests in parallel (evenutally having mulitiple builds) but only having one Avalon server can provoke failing tests although the would be fine but the data in the database is not necessary as expected

Test Spec

```
    void setupSpec() {
        login(FavouriteListOverviewPage, 'default')
    }

    void "Click on create new favourite list"() {
        given:
          p = at FavouriteListOverviewPage

        when:
          p = p.goToCreateFavouriteListPage()

        then:
          at CreateFavouriteListPage
    }
```

Page Class

```
    static at = {
      title == 'PLCD Web Favourites'
      favouriteListLookupInputFilter.displayed
    }

    static content = {
      copyFavouriteListBtn { $("button#copyFavouriteListBtn").module(FormElement) }
      favouriteListLookupInputFilter { $("input#favouriteListLookupInputFilter") }
   }

     void clickOnCopyFavouriteList() {
        waitFor {
            copyFavouriteListBtn.enabled
        }
        copyFavouriteListBtn.click()
        waitForBlockUI()
        return browser.at(CreateFavouriteListPage)
    }
```

#Docker extended

* Useful Docker commands 
* Docker compose

# Q & A

* Open discussion / maybe show the project in intellij 