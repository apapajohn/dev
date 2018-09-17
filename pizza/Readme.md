# Pizza Order App


Run as a Spring Boot App. Either run it from the command line:

```
java -jar pizza-0.0.1-SNAPSHOT.jar
```

Or run it from the IDE. The main class is com.greek.pizza.PizzaApplication

Start by adding toppings to the inventory:
http://localhost:9633/inventory/index.html

Then go to the  main page to select toppings and place an order:
http://localhost:9633

## To Do
Unfortunately, these things are missing and would need to be added before this could be considered production ready:
- Use MySql db (currently embedded H2)
- Add better logging
- Add security (login required for site-manager)
- Redesign UI
- Asynchronous calls from UI checking for updates to topping inventory
- Integration tests
- Add angular build to maven (currently requires manual build, copy to static web folder)
- Validation

## Requirements

### Backend:
Store and read inventory
Add and remove toppings
Assemble orders along with an order total
Accept order and payment and place order  (payment a future feature: customer will have to pay in store.)

### Front end:
#### Customers:
Place an order for 1 pizza (one variety available for now, one order per person for now)
select toppings from available
Prevent users from paying for a pizza when an item in their order ran out.
Prevent users from selection of items that have run out

#### Manager:
Update the inventory
Customize the inventory 


### Assumptions:
- Managers can customize quantity and type of topping.
- Customers can add a topping more than once (for extra)
- Managers need to authenticate securely
- Requirements specify one pizza, but it will be desirable in the future for customers to order more than one pizza at a time.

### Architecture decisions:

- The transactional nature of the data calls for a relational database.
- Using Spring because it's convenient for its web capabilities, such as security, JPA and transactions, and later can be helpful for adding services, caching
 caching, or user sessions if future functionality requires it.
- Angular to isolate the UI from the back end to support extending the site for additional functionality such as advertising custom offers
- Due to budget constraints:
- Monolithic MVC architecture
- For speed of development, using an embedded sql database. Should eventually be replaced with an external db such as MySql


