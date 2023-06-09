import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import CompanyInfo from "./CompanyInfo";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem("UserInfo"));
  const handleLogout = () => {
    localStorage.removeItem("UserInfo");
    navigate("/login");
    return;
  };
  return (
    <Flex justify="space-between" align="center" px={8} py={4} bg="gray.200">
      {formData?.map((el) => (
        <Button colorScheme="blue">{el.profession}</Button>
      ))}

      <Button colorScheme="green" onClick={handleLogout}>
        LogOut
      </Button>
      <Button bg="purple" _hover={"purple"}>
        <CompanyInfo />
      </Button>
    </Flex>
  );
}
