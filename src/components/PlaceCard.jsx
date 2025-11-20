import {
    FaStar,
    FaRegStar,
    FaRegBookmark,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaGlobe,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

export default function PlaceCard({
    place,
    photoUrl,
    email,
    handleEmailContact,
    handleGmailContact,
    handleSave,
    handleUnsave,
}) {
    const rating = Number(place.rating) || 0;
    const displayEmail = email || place.email;
    const phone = place.phone || place.contactPhone || place.contact_phone;
    const website = place.website || place.url;

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* IMAGE SECTION */}
            <div className="relative overflow-hidden">
                {photoUrl ? (
                    <img
                        src={photoUrl}
                        alt={place.name}
                        className="w-full h-56 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        onClick={() => window.open(photoUrl, "_blank")}
                    />
                ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                            <FaMapMarkerAlt className="mx-auto mb-2 text-4xl opacity-40" />
                            <span className="text-sm">No Image Available</span>
                        </div>
                    </div>
                )}

                {/* SAVE BUTTON */}
                <button
                    onClick={place.isSaved ? handleUnsave : handleSave}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer"
                >
                    <FaRegBookmark className="text-lg text-foreground/70" />
                </button>
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-4">
                {/* TITLE + RATING */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-foreground line-clamp-1">
                        {place.name}
                    </h2>

                    <div>
                        <span className="text-sm font-medium text-muted-foreground">
                            Rating:
                        </span>{" "}
                        {rating > 0 ? rating.toFixed(1) : "No rating"}
                        <div className="flex items-center gap-1 mt-1">
                            {Array.from({ length: 5 }).map((_, index) =>
                                index < Math.round(rating) ? (
                                    <FaStar
                                        key={index}
                                        className="text-yellow-400"
                                    />
                                ) : (
                                    <FaRegStar
                                        key={index}
                                        className="text-yellow-400"
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* ADDRESS + CONTACT SIDE BY SIDE */}
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    {/* ADDRESS (LEFT) */}
                    <div className="flex-1 text-muted-foreground space-y-0.5">
                        {/* Line 1: Road + House Number */}
                        {(place.address?.road || place.address?.house_number) && (
                            <p className="line-clamp-1">
                                {[place.address.road, place.address.house_number]
                                    .filter(Boolean)
                                    .join(" ")}
                            </p>
                        )}

                        {/* Line 2: Suburb + District + City */}
                        {(place.address?.suburb ||
                            place.address?.district ||
                            place.address?.city) && (
                            <p className="line-clamp-1">
                                {[
                                    place.address.suburb,
                                    place.address.district,
                                    place.address.city,
                                ]
                                    .filter(Boolean)
                                    .join(", ")}
                            </p>
                        )}

                        {/* Line 3: State + Postcode */}
                        {(place.address?.state || place.address?.postcode) && (
                            <p className="line-clamp-1">
                                {[place.address.state, place.address.postcode]
                                    .filter(Boolean)
                                    .join(", ")}
                            </p>
                        )}

                        {/* Line 4: Country */}
                        {place.address?.country && (
                            <p className="line-clamp-1">
                                {place.address.country}
                            </p>
                        )}
                    </div>

                    {/* CONTACT (RIGHT) */}
                    <div className="flex-1 bg-muted/40 rounded-lg p-3 space-y-2">
                        <p className="font-medium text-foreground text-sm">
                            Contact
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <FaPhoneAlt className="shrink-0" />
                            <span className="line-clamp-1">
                                {phone || "Not available"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <FaEnvelope className="shrink-0" />
                            <span className="line-clamp-1">
                                {displayEmail || "Not available"}
                            </span>
                        </div>
                    </div>
                </div>

                 {/* ACTION BUTTONS: EMAIL / GMAIL */}
                 <div className="flex items-center gap-2 pt-1">
                    <button
                        onClick={handleEmailContact}
                        className="p-2.5 rounded-lg border bg-background hover:bg-accent transition cursor-pointer"
                    >
                        <FaEnvelope className="text-lg text-foreground" />
                    </button>

                    <button
                        onClick={handleGmailContact}
                        className="p-2.5 rounded-lg border bg-background hover:bg-accent transition cursor-pointer"
                    >
                        <SiGmail className="text-lg text-red-500" />
                    </button>
                </div>

                {/* WEBSITE + MAP BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    {/* WEBSITE BUTTON */}
                    {website ? (
                        <a
                            href={website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/90 transition-colors"
                        >
                            <FaGlobe className="text-base" />
                            Website
                        </a>
                    ) : (
                        <button
                            disabled
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground rounded-lg font-medium text-sm cursor-not-allowed"
                        >
                            <FaGlobe className="text-base" />
                            No website available
                        </button>
                    )}

                    {/* MAP BUTTON */}
                    <a
                        href={place.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                    >
                        View Map
                        <HiExternalLink className="text-base" />
                    </a>
                </div>

               
            </div>
        </div>
    );
}
