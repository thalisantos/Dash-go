import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text cursor="context-menu">Thalita Santos</Text>
        <Text color="gray.300" fontSize="small" cursor="context-menu">
          thalitasantos@gmail.com
        </Text>
      </Box>
      )}

<Avatar size="md" name="Thalita Santos" src="https://github.com/thalisantos.png" />
    </Flex >
  )
}