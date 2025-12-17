import LogoImage from '../../assets/Read_and_Heal_logo.jpg';

export default function AppLogo() {
    return (
        <div className="flex items-center">
            <img
                src={LogoImage}
                alt="Read and Heal"
                className="h-8 w-auto object-contain"
            />
        </div>
    );
}
