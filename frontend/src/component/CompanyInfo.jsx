import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function CompanyInfo() {
  const [companyInfo] = useState({
    name: "Geeksynergy Technologies Pvt Ltd",
    address: "Sanjayanagar, Bengaluru-56",
    phone: "XXXXXXXXX09",
    email: "XXXXXX@gmail.com",
  });
  return (
    <Flex justify="center">
      <Menu>
        <MenuButton color={"white"}>
          Company Info
          <Icon as={ChevronDownIcon} />
        </MenuButton>
        <MenuList bg="purple" mt={5}>
          <MenuItem color={"white"} bg="purple">
            {companyInfo.name}
          </MenuItem>
          <MenuItem color={"white"} bg="purple">
            {companyInfo.address}
          </MenuItem>
          <MenuItem color={"white"} bg="purple">
            {companyInfo.phone}
          </MenuItem>
          <MenuItem color={"white"} bg="purple">
            <Link href={`mailto:${companyInfo.email}`}>
              {companyInfo.email}
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
