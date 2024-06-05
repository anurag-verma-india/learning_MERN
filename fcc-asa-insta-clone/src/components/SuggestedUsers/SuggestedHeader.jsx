import { Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
    return (
        <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"full"}
        >
            <Flex alignItems={"center"} gap={2}>
                <Avatar size={"lg"} src="/profilepic.jpg" name="Anurag Verma" />
                <Text fontSize={12} fontWeight={"bold"}>
                    anurag_verma
                </Text>
            </Flex>
            <Link
                as={RouterLink}
                to={"/auth"}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                style={{ textDecoration: "none" }}
                cursor={"pointer"}
                _hover={{color: "white"}}
            >
                Log out
            </Link>
        </Flex>
    );
};

export default SuggestedHeader;
