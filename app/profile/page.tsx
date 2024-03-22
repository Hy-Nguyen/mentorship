import Image from "next/image";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Body from "../../components/Body";

import { Card, CardBody } from "@nextui-org/react";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        
        <SideBar />

        <div className="bg-blue flex flex-col w-1/3 p-2 justify-center items-center">   
            <Card className=" bg-slate-400 w-full h-1/2 p-2 m-2 text-black ">
            <CardBody>

              <div class="relative flex  items-center justify-center size-[175px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">
                  JD</span>
              </div>

              <h1 className="flex justify-center">FirstName LastName</h1>
              <p className="flex justify-center">Job Title</p>
              <p className="flex justify-center">Location</p>

              <div className="flex justify-center">
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 
                text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-1/3 m-2">
                  Follow</button>

                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 
                hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-1/3 m-2">
                  Message
                </button>

              </div>


            </CardBody>
            </Card>           

            <Card className=" bg-slate-400 w-full h-1/2 p-2 m-2 text-black ">
            <CardBody>

              <p>Social Links</p>

            </CardBody>
            </Card>   
        </div>

    <div className="bg-black flex flex-col w-full">

          <div className="flex items-center justify-center m-2 bg-black w-full h-1/2 p-2">  

            <Card className=" bg-slate-400 w-full h-full p-2 m-2 text-black ">
            <CardBody>

            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">

                <div className="flex flex-row p-2 m-2">
                    <div className="w-1/3 text-xl font-bold">
                      <h6>Full Name</h6>
                    </div>
                    <div className="w-1/2 text-xl">
                      John Doe
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row p-2 m-2">
                    <div className="w-1/3 text-xl font-bold">
                      <h6>Organization</h6>
                    </div>
                    <div className="w-1/2 text-xl">
                      Arizona State University
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row p-2 m-2">
                    <div className="w-1/3 text-xl font-bold">
                      <h6>Email</h6>
                    </div>
                    <div className="w-1/2 text-xl">
                      Johndoe123@gmail.com
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row p-2 m-2">
                    <div className="w-1/3 text-xl font-bold">
                      <h6>Phone Number</h6>
                    </div>
                    <div className="w-1/2 text-xl">
                      (480) 420-6969
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row p-2 m-2">
                    <div className="w-1/3 text-xl font-bold">
                      <h6>Address</h6>
                    </div>
                    <div className="w-1/2 text-xl">
                      1151 S Forest Ave, Tempe, Arizona
                    </div>
                  </div>

                  <hr />

                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </CardBody>
            </Card>
            
          </div>
            

          <div className="bg-gray flex flex-row justify-center h-1/2 w-full p-2 m-2">  

            <Card className=" bg-slate-400 w-1/2 h-full  m-2 mt-0 marker:float-left text-black ">
            <CardBody>

              <p>example 1</p>

            </CardBody>
            </Card>

            <Card className=" bg-slate-400 w-1/2 h-full  m-2 mt-0 text-black ">
            <CardBody>

              <p>example 2</p>

            </CardBody>
            </Card>

          </div>
    </div>        
        

      </div>
    
    </main>
  );
  
}
