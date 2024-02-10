import React from 'react'; 
import NavigationLinks from "../components/NavigationLinks";
import { siteLinks } from '../utils/enums';

const Quiz: React.FC = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <NavigationLinks linkType={siteLinks.Quiz}/>
    </div>
  );
};

export default Quiz;
