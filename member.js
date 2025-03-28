function skillsMember(member) {
    if (!member || !member.skills) {
        console.error("Invalid member data");
        return;
    }

    console.log(`Skills for ${member.name}:`);
    member.skills.forEach((skill, index) => {
        console.log(`${index + 1}. ${skill}`);
    });
}

// Example usage:
const member = {
    name: "John Doe",
    skills: ["JavaScript", "React", "Node.js"]
};

skillsMember(member);