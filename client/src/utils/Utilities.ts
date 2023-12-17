export const generateRoomCode = (length: number): string => {
  let roomCode: string = "";
  Array.from({ length }).some(() => {
    roomCode += Math.random().toString(36).toUpperCase().slice(2);
    return roomCode.length >= length;
  });
  return roomCode.slice(0, length);
};
