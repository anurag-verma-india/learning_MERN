import { Flex, Text, VStack, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"full"}
            >
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text
                    fontSize={12}
                    fontWeight={"bold"}
                    _hover={{ color: "gray.500" }}
                    cursor={"pointer"}
                >
                    See All
                </Text>
            </Flex>
            <SuggestedUser
                name="Dan Abramov"
                followers={100}
                avatar="https://bit.ly/dan-abramov"
            />
            <SuggestedUser
                name="Code Beast"
                followers={200}
                avatar={"https://bit.ly/code-beast"}
            />
            <SuggestedUser
            name="Ryan Florence"
            followers={407} 
            avatar="https://bit.ly/ryan-florence"
             />
            <Box mt={5} fontSize={12} color={"gray.500"} alignSelf={"start"}>
                © Built by{" "}
                <Link
                    href="https://github.com/anurag-verma-india"
                    target="_blank"
                    color={"blue.500"}
                    fontSize={14}
                >
                    Anurag Verma
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedUsers;
