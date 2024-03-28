import Image from "next/image";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Body from "../../components/Body";

import {
  Avatar,
  Card,
  CardBody,
  Divider,
} from "@nextui-org/react";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        <SideBar />

        <div className="bg-blue flex flex-col h-full w-1/3 p-2 justify-center items-center">
          <Card className=" bg-slate-400 w-full h-1/2 p-2 m-2 text-black ">
            <CardBody className="flex flex-col items-center">

              <Avatar className="w-48 h-48 text-large" name="JD"/> 

              <h1 className="flex justify-center">
                FirstName LastName
              </h1>
              <p className="flex justify-center">
                Job Title
              </p>
              <p className="flex justify-center">
                Location
              </p>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 
                text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-1/2 m-2"
                >
                  Follow
                </button>

                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 
                hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-1/2 m-2"
                >
                  Message
                </button>
              </div>
            </CardBody>
          </Card>

          <Card className=" bg-slate-400 w-full h-auto p-2 m-2 text-black flex justify-center">
            <CardBody>


                      <div className="flex flex-row justify-center w-full py-2 my-2">
                        <div className="w-1/2 text-s font-bold">
                          <h6>Website</h6>
                        </div>
                        <div className="w-1/2 text-xs">
                          randomURL.com
                        </div>
                      </div>

    

                      {/* <hr /> */}
                      <Divider />


                      <div className="flex flex-row justify-center w-full py-2 my-2">
                        <div className="w-1/2 text-s font-bold">
                          <h6>Email</h6>
                        </div>
                        <div className="w-1/2 text-xs">
                          Johndoe123@URL.com
                        </div>
                      </div>



                        <Divider />

                      <div className="flex flex-row justify-center w-full py-2 my-2">
                        <div className="w-1/2 text-s font-bold">
                          <h6>Github</h6>
                        </div>
                        <div className="w-1/2 text-xs">
                          Johndoe123
                        </div>
                      </div>

                      <Divider />


                      <div className="flex flex-row justify-center w-full py-2 my-2">
                        <div className="w-1/2 text-s font-bold">
                          <h6>LinkedIn</h6> 
                        </div>
                        <div className="w-1/2 text-xs">
                          Johndoe123
                        </div>
                      </div>


                      <Divider />

                      <div className="flex flex-row justify-center w-full py-2 my-2">
                        <div className="w-1/2 text-s font-bold">
                          <h6>Handshake</h6>
                        </div>
                        <div className="w-1/2 text-xs">
                          Johndoe123
                        </div>
                      </div>



                        <Divider />

                        <div className="flex flex-row justify-center w-full py-2 my-2">
                        <div className="w-1/2 text-s font-bold">
                          <h6>Twitter</h6> 
                        </div>
                        <div className="w-1/2 text-xs">
                          Johndoe123
                        </div>
                      </div>

            </CardBody>

          </Card>
        </div>

        <div className="bg-black flex flex-col w-full">
          <div className="flex items-center justify-center m-2 bg-black w-full h-1/2 p-2">
            <Card className=" bg-slate-400 w-full h-full p-2 m-2 text-black ">
              <CardBody>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="flex flex-row p-2 m-2">
                        <div className="w-1/3 text-xl font-bold">
                          <h6>Full Name</h6>
                        </div>
                        <div className="w-1/2 text-xl">
                          John Doe
                        </div>
                      </div>

                      <Divider />

                      <div className="flex flex-row p-2 m-2">
                        <div className="w-1/3 text-xl font-bold">
                          <h6>Organization</h6>
                        </div>
                        <div className="w-1/2 text-xl">
                          Arizona State University
                        </div>
                      </div>

                      <Divider />

                      <div className="flex flex-row p-2 m-2">
                        <div className="w-1/3 text-xl font-bold">
                          <h6>Email</h6>
                        </div>
                        <div className="w-1/2 text-xl">
                          Johndoe123@gmail.com
                        </div>
                      </div>

                      <Divider />

                      <div className="flex flex-row p-2 m-2">
                        <div className="w-1/3 text-xl font-bold">
                          <h6>Phone Number</h6>
                        </div>
                        <div className="w-1/2 text-xl">
                          (480) 420-6969
                        </div>
                      </div>

                      <Divider />

                      <div className="flex flex-row p-2 m-2">
                        <div className="w-1/3 text-xl font-bold">
                          <h6>Address</h6>
                        </div>
                        <div className="w-1/2 text-xl">
                          1151 S Forest Ave,
                          Tempe, Arizona
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-12">
                          <a
                            className="btn btn-info "
                            target="__blank"
                            href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                          >
                            Edit
                          </a>
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
                <p>Tags</p>
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
