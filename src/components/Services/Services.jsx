import { services } from "./constants";
import styles from "./Services.module.css";

export default function ServicesGrid() {

    return (
        <section className="py-20 bg-neutral-50">
            <div className="max-w-8xl mx-auto px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10"
                        >
                            <div className={styles.cardHeader}>
                                <img
                                    src={service.img}
                                    alt=""
                                    aria-hidden="true"
                                    className={styles.cardHeaderImage}
                                />
                            </div>
                            <div className="px-1 py-5 sm:px-6">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3 leading-snug min-h-[3.5rem]">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="bg-gray-50 px-1 py-5 sm:p-6 dark:bg-gray-800/50 h-full">
                                <p className="text-neutral-600 mb-4">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.bullets.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-neutral-700">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="text-sm font-semibold text-red-600 hover:text-red-700 transition">

                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
