import { Header } from '@/components/header/Header';
import { Main } from '@/components/main/Main';

export const PageLayout = () => {
    return (
        <div className="upload-ai__container min-h-screen flex flex-col">
            <Header />
            <Main />
        </div>
    );
};
