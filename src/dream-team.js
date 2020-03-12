module.exports = function createDreamTeam(members) {
  // for (let i=0; i<members.length; i++) {
  //   if (typeof(members[i]) !== 'string') {
  //     members.splice(i, 1);
  //   }
  // }
  // members.sort();
  // for (let i=0; i<members.length; i++) {
  //   teamName.concat(members[i].charAt[0]);
  // }
  let teamName='';
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i=0; i<members.length; i++) {
    if (typeof(members[i]) === 'string') {
      //teamName.concat(members[i].charAt(0));
      let withoutSpace = members[i].trim();
      teamName += withoutSpace.charAt(0).toUpperCase();
    } else {
      continue;
    }
  }
  return teamName.split('').sort().join('');
}