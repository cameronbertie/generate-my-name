import React, { useState } from "react";

export default function Names(props) {
  function capitaliseFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const nickname = capitaliseFirstChar(props.nickname);
  const adjective1 = capitaliseFirstChar(props.adjective1);
  const adjective2 = capitaliseFirstChar(props.adjective2);
  const adjective3 = capitaliseFirstChar(props.adjective3);
  const nationality = capitaliseFirstChar(props.nationality);
  const object1 = capitaliseFirstChar(props.object1);
  const object2 = capitaliseFirstChar(props.object2);
  const animal = capitaliseFirstChar(props.animal);

  const nameList = [
    `${nickname}rex`,
    `IHas${object1}`,
    `${nickname}asaurusRex`,
    `${nickname}${adjective2}${object2}`,
    `${nickname}${nationality}`,
    `Uber${adjective1}${animal}`,
    `Disguised${animal}`,
    `${adjective1}${object1}OMG`,
    `${adjective2}${object1}LOL`,
    `${adjective3}${object1}OMG`,
    `${adjective1}${object2}LOL`,
    `${adjective2}${object2}OMG`,
    `${adjective3}${object2}LMAO`,
    `Iam${adjective1}`,
    `Iam${adjective2}`,
    `Iam${adjective3}`,
    `Iam${nickname}`,
    `${animal}Milk`,
    `${nickname}${adjective3}${animal}`,
    `MindOf${nickname}`,
    `Gamer${animal}`,
    `The${adjective1}Gamer`,
    `The${adjective2}Gamer`,
    `The${adjective3}Gamer`,
    `Dr${adjective1}`,
    `${nickname}${object1}popper`,
    `Big${adjective1}${animal}`,
    `ItIsYe${animal}`,
    // `N1ckn4m3`,
    `${animal}Boy`,
    `${animal}Girl`,
    `${animal}Person`,
    `Captain${adjective1}`,
    `IHas${object2}`,
    `Total${animal}`,
    `The${adjective1}${nationality}Dude`,
    `TheGaming${animal}`,
    `GamingWith${nickname}`,
    `MrGame${animal}`,
    `MsGame${animal}`,
  ];

  const getDefaultName = Math.floor(Math.random() * nameList.length);
  const defaultName = nameList[getDefaultName];

  const [generatedName, setGeneratedName] = useState(defaultName);

  const handleClick = (event) => {
    event.preventDefault();
    const getRandomName = Math.floor(Math.random() * nameList.length);
    const randomName = nameList[getRandomName];
    setGeneratedName(randomName);
  };

  return (
    <div className="page-container">
      <h2 class="name-heading">YOUR SUGGESTED GAMING NAME IS:</h2>
      <h3 className="generated-name">{generatedName}</h3>
      <div className="form-container">
        <button onClick={handleClick} className="new-name-button">
          GIVE ME A DIFFERENT NAME
        </button>
      </div>
    </div>
  );
}
