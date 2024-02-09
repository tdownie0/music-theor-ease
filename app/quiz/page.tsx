import React from 'react'; 
import NavigationLinks from "../components/NavigationLinks";
import { LinkType } from '../utils/enums';

const Quiz: React.FC = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <NavigationLinks linkType={LinkType.Quiz}/>
    </div>
  );
};

export default Quiz;
