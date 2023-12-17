type RoleNames = {
  name: "Civillian" | "Mafia" | "Doctor" | "Detective" | "Mystic" | "Jester";
};

interface Role extends RoleNames {
  description: string;
  winCondition: string;
  primaryColour: string;
  secondaryColour: string;
}

export default Role;
