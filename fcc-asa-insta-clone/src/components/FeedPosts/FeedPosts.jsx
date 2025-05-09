import {
    Container,
    VStack,
    Flex,
    SkeletonCircle,
    Skeleton,
    Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading &&
                [0, 1, 2, 3].map((_, idx) => (
                    <VStack key={idx} gap={4} mb={10} alignItems={"flex-start"}>
                        <Flex gap="2">
                            <SkeletonCircle size="10" />
                            <VStack gap={2} alignItems={"flex-start"}>
                                <Skeleton height={"10px"} width={"200px"} />
                                <Skeleton height={"10px"} width={"200px"} />
                            </VStack>
                        </Flex>
                        <Skeleton w={"full"}>
                            <Box h={"500px"}>Contents Wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}
            {!isLoading && (
                <>
                    <FeedPost
                        img="/img1.png"
                        username="someWhiteGirl"
                        avatar="/img1.png"
                    />

                    <FeedPost
                        img="/img2.png"
                        username="josh"
                        avatar="/img2.png"
                    />
                    <FeedPost
                        img="/img3.png"
                        username="janedoe"
                        avatar="/img3.png"
                    />
                    <FeedPost
                        img="/img4.png"
                        username="janedoe_"
                        avatar="/img4.png"
                    />
                </>
            )}
        </Container>
    );
};

export default FeedPosts;
