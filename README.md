# car_dealership_App
- car dealership that generates leads from a wide variety of sources.
- main goal of this app to pickup possible leads ,their potentials, update them information to select actual potential from all potentials.

# 🚀 Get started here

##### **Firstly,** run your app on _**baseUrl**_ = _localhost:3000_

## 🔖 **How to use this template**

## 1.**GetAllLeads api:**

- get the last updated informations of all leads :
- get request for base_url/api/leads
    

---

## **2.G**etPotentialsByLeadId api:

- get list of all potentials leads by lead id as shown:
- get request for base_url/api/leads/:lead_id/potential-duplicates
    

``` json
["b33f4c03-4bfb-40fc-887d-eefc5e9ca793","ee7ccdb4-1f6b-46af-b683-f611bb95e4b9","2799c903-6208-460e-8acc-63c6df3731a6"]

 ```

---

## 3.**GetAllLeads api:**

- update information of selected lead by give lead id
- put request for base_url/api/leads/:lead_id
- when send you must update information by give body json;
- make sure that you selected body => row => json
- body shown as :
    
    ``` json
                  {
                      "first_name": "shelley",
                      "last_name": "padilla",
                      "lead_id": "b33f4c03-4bfb-40fc-887d-eefc5e9ca793",
                      "email": "spadilla@example.com",
                      "source": "MyDeal",
                      "home_phone": "5879927121",
                      "cell_phone": "",
                      "duplicate_of": null
                  }
    
     ```
