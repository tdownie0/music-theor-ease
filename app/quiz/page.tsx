import NavigationLinks from "../components/NavigationLinks";

const linkNames: string[] = ["Home", "Circles", "Modes"];

const Quiz: React.FC = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <NavigationLinks linkType="quiz"/>
    </div>
  );
};

export default Quiz;
