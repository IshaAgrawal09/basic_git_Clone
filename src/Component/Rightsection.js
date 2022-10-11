import { Tabs } from "@shopify/polaris";
import { useState, useCallback } from "react";
import Overview from "./Overview";
import Projects from "./Projects";
import Repositories from "./Repositories";

const Rightsection = (props) => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-4",
      content: `Overview`,
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-4",
    },
    {
      id: "accepts-marketing-4",
      content: `Repositories ${props.userData.public_repos}`,
      panelID: "accepts-marketing-content-4",
    },
    {
      id: "repeat-customers-4",
      content: "Project",
      panelID: "repeat-customers-content-4",
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      selected={selected}
      onSelect={handleTabChange}
      disclosureText="More views"
    >
      {selected === 0 ? (
        <Overview userData={props.userData} />
      ) : selected === 1 ? (
        <Repositories userData={props.userData} />
      ) : (
        <Projects userData={props.userData} />
      )}
    </Tabs>
  );
};

export default Rightsection;
