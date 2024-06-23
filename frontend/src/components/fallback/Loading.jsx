import Loader from '/static/loader/loader.gif';

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <img src={Loader} alt="Loading..." className="w-16 h-16 mx-auto" />
                <p className="mt-4 text-gray-700 text-xl italic font-semibold">
                    Descubra tudo o que a AgroSmart pode fazer por você!
                </p>
            </div>
        </div>
    );
}
