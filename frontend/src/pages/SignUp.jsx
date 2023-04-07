import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
export default function SignUp() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [profession, setProfession] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  let Data = [];
  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Fields correct!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password Do Not Match!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
    // Save form data to local storage
    const formData = { name, password, email, number, profession };
    Data.push(formData);
    localStorage.setItem("UserInfo", JSON.stringify(Data));
    // Reset form fields
    setName("");
    setPassword("");
    setEmail("");
    setNumber("");
    setProfession("");
    toast({
      title: "Registration Successful!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    setLoading(false);
  };
  const handleClick = () => setShow(!show);
  const handleClick1 = () => setShow1(!show1);
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired color={"black"}>
        <FormLabel>Name</FormLabel>
        <Input
          variant="filled"
          border={"1px grey solid"}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          border={"1px grey solid"}
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="number" isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input
          border={"1px grey solid"}
          placeholder="Enter Your Email"
          name="number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </FormControl>
      <FormControl id="profession" isRequired>
        <FormLabel>Profession</FormLabel>
        <Select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        >
          <option value="Engineer">Engineer</option>
          <option value="Designer">Designer</option>
          <option value="Writer">Writer</option>
        </Select>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            border={"1px grey solid"}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            border={"1px grey solid"}
            type={show1 ? "text" : "password"}
            placeholder="Enter Confirm Password"
            name="confirmpassword"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick1}>
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg={"#0B96E2"}
        color="white"
        _hover={{ bg: "#0B96E2", color: "white" }}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
}
