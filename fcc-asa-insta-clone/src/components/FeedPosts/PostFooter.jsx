import {
    Flex,
    Box,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from "@chakra-ui/react";
import {
    NotificationsLogo,
    UnlikeLogo,
    CommentLogo,
} from "../../assets/constants";
import { useState } from "react";

const PostFooter = ({username}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);
    // const liked = true
    // setLiked(false);
    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    };

    return (
        <Box my={10}>
            <Flex
                alignItems={"center"}
                gap={4}
                width={"full"}
                pt={0}
                mb={2}
                mt={4}
            >
                <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={"sm"}>
                {likes} likes
            </Text>

            <Text fontSize={"sm"} fontWeight={700}>
              {username}{" "}
                <Text as={"span"} fontWeight={400}>
                    Feeling Good
                </Text>
            </Text>
            <Text fontSize={"sm"} color={"gray"}>
                View all 1,000 comments
            </Text>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
                w={"full"}
            >
                <InputGroup>
                    <Input
                        variant={"flushed"}
                        placeholder="Add a comment..."
                        fontSize={14}
                    ></Input>
                    <InputRightElement>
                        <Button
                        fontSize={14}
                        fontWeight={600}
                        color={"blue.500"}
                        cursor={"pointer"} 
                        bg="transparent"
                        _hover={{color: "white"}}
                        >Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    );
};

export default PostFooter;
