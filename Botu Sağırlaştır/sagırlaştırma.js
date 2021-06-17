client.on('voiceStateUpdate', async (___, newState) => {
// Phase Development
  if (
    newState.channelID &&
    newState.member.user.id == client.user.id &&
    newState.member.user.bot &&
    !newState.selfDeaf
  ) { // TheGhost
    newState.setSelfDeaf(true);
  } // https://discord.gg/AhYJewwVQ5
});