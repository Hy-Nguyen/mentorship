import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function ResumeCard() {
  return (
    <>
      <Card className="w-2/12 h-2/3 ml-4 mt-4">
        <CardBody className="w-auto h=100% p-0 bg-slate-200 flex justify-center items-center">
          <img
            src="/sampleResume.png"
            alt="Preview of Transcript"
            style={{
              width: "80%",
              height: "90%",
              borderRadius: "10px",
            }}
          />
        </CardBody>
        <CardFooter className=" w-auto h-100% p-0 my-2 flex justify-center items-center rounded-none">
          <div>
            <Button color="primary" variant="solid" size="lg">
              Preview Resume
            </Button>
          </div>
        </CardFooter>
      </Card>
      ;
    </>
  );
}
