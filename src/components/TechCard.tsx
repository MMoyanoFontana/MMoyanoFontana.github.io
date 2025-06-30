interface TechCardProps {
    name: string;
    icon: string;
    isSvg?: boolean;
}

const TechCard = ({ name, icon }: TechCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border border-gray-100 hover:border-gray-200">
            <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8">
                    <img src={icon} alt={`${name} icon`} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-gray-800 font-medium">{name}</span>
            </div>
        </div>
    );
};

export default TechCard;
