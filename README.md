## Car Dealership Angular App is a simple app perform sepecific Tasks.

- the Application run on localhost:4200, when you download this app run api first on localhost:3000, then run application.

- we generate 3 main components: header, home, potentials.
- then download necessary packages: bootstrap, fontawesome.

- then we add navbar to header component with a simple design,
- update app-routing-module to make /home is a default endpoint in my app, and render home-Component to be a default.

- then generate interface Lead to use in the service that we will build it to Consume date from api in this shape of it's Fields Name & DataType in this formula.
- then generate service file to consume api, build function for each endpoint from the 3 endpoint

## GET /api/leads
- then go to home component to generate code to fetch the entry endpoint /api/leads
- use function of service to subscribe on it from a function on home.component.ts to get data as shown:

![image](https://github.com/OmarKhaled192/car_dealership_App/assets/94392724/dee41d9c-f53b-40ad-aba8-ce430c92b8b7)

- then handeling errors in home page as shown:

![image](https://github.com/OmarKhaled192/car_dealership_App/assets/94392724/d9d34fb0-f4b4-45ae-9e7a-6556aff46ce0)

and user can press Try Again Button to render home page again.

## GET /api/leads/:lead_id/potential-duplicates
- then we need to send lead_id when user clicked "Show Potentials" Button.
- Update Routing Module to Handeling appropiate endpoint as it /potentialsOf/:lead_id
- then go to Potentials Component and render the Potentials of this Lead with its state of Actual Potentials or not as shown:

![image](https://github.com/OmarKhaled192/car_dealership_App/assets/94392724/89c2361f-9c0c-43c3-b691-a6cfa2d47dfd)

## PUT /api/leads/:lead_id
- then give user possibilty of selecting actual potential from this list of potentials and update this object of this Lead B
- with change in the field of "dublicate_of" to carry id of Lead A as shown:

- ![image](https://github.com/OmarKhaled192/car_dealership_App/assets/94392724/7d2c62cf-c6b9-40ad-b14a-346ae3702887)

- give user possibility of unselect this Lead By return the field of "dublicate_of" to be Null again By Press On "Make as Unselect"
- to return to default.

- then we need to handel server error 500 as shown:

![image](https://github.com/OmarKhaled192/car_dealership_App/assets/94392724/d9d34fb0-f4b4-45ae-9e7a-6556aff46ce0)

- then we need also to handel error 404 as shown:

![image](https://github.com/OmarKhaled192/car_dealership_App/assets/94392724/f4f083e9-cca4-4b3b-bb35-5d6a0fbbfb80)

