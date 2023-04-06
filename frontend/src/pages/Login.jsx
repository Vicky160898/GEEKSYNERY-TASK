import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !password) {
      toast({
        title: "Please Fill all the Fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
    // Get previously registered form data from local storage
    const formData = JSON.parse(localStorage.getItem("UserInfo"));
    setLoading(true);
    if (
      name === formData.name &&
      password === formData.password &&
      formData !== undefined
    ) {
      toast({
        title: "Login Successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      navigate("/");
      return;
    } else {
      toast({
        title: "Invalid Credential!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
  };
  const handleClick = () => setShow(!show);
  return (
    <VStack spacing={"5px"}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          border={"1px grey solid"}
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            border={"1px grey solid"}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg={"#1082CB"}
        color="white"
        _hover={{ bg: "#1082CB", color: "white" }}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Login
      </Button>
    </VStack>
  );
}
