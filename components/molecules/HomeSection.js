const HomeSection = ({
  title,
  subtitle,
  customTitle,
  customSubtitle,
  description,
  sectionClassName = "",
  additionalTitleClassName = "",
  addedClassName = "bg-white rounded-t-lg",
  points = [],
  children = null,
  additionalContentClassName = "",
  isHalfSection = false,
  isSliderTitle = false,
  imageSrc = null,
  imagePosition = 'left',
  imageDivClassName = '',
  imageClassName = 'w-full h-full',
  buttonText = null,
  buttonOnClick = null,
  buttonClassName = 'bg-[#A40E4C] text-white font-bold border-white border-2 uppercase rounded-2xl px-12 py-2 absolute bottom-4',
  steps = [],
}) => {
  return (
    <section className={`w-full relative ${sectionClassName}`}>
      <div className="text-center mb-20">
        {customTitle && (
          <h2 className={`text-4xl font-extrabold text-[#A40E4C] uppercase ${additionalTitleClassName}`}>
            {customTitle}
          </h2>
        )}
        {Array.isArray(customSubtitle) ? (
          customSubtitle.map((subtitle, index) => (
            <h3 key={index} className="text-2xl font-semibold text-white mt-2">
              {subtitle}
            </h3>
          ))
        ) : (
          <h3 className="text-2xl font-semibold text-white mt-2">
            {customSubtitle}
          </h3>
        )}
      </div>

      {steps.length > 0 && (
        <div className="flex justify-around items-center mt-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/4">
              <img
                src={step.icon}
                alt={step.label}
                className={`w-24 h-24 mb-4 ${step.iconClassName || ''}`}
              />
              <h3 className="font-bold text-lg text-center">{step.label}</h3>
              {Array.isArray(step.description) ? (
                step.description.map((desc, index) => (
                  <p key={index} className="text-center text-sm">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-center text-sm">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className={`${addedClassName} w-full flex ${imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}>
        {imageSrc && (
          <div className={`relative w-1/2 flex justify-center items-center overflow-hidden ${imageDivClassName}`}>
            <img src={imageSrc} alt="HomeCard Image" className={`object-cover ${imageClassName}`} />
            
            {buttonText && (
              <button onClick={buttonOnClick} className={buttonClassName}>
                {buttonText}
              </button>
            )}
          </div>
        )}

        {title && (
          <div className={`${additionalContentClassName} ${isHalfSection ? 'w-2/3' : 'w-full'} px-8`}>
            {isSliderTitle ? (
              <h2 className={`text-2xl font-bold mb-8 ${additionalTitleClassName}`}>
                {title}
              </h2>
            ) : (
              <h3 className={`text-3xl font-bold mb-2 ${additionalTitleClassName}`}>
                {title}
              </h3>
            )}
            {Array.isArray(subtitle) ? (
              subtitle.map((sub, index) => (
                <h4 key={index} className="text-4xl mb-8 uppercase font-extrabold">
                  {sub}
                </h4>
              ))
            ) : (
              <h4 className="text-lg mb-2">
                {subtitle}
              </h4>
            )}

            {description && <p className="text-lg mb-6 leading-relaxed">{description}</p>}

            {points.length > 0 && (
              <ol className="text-left">
                {points.map((point, index) => (
                  <li key={index} className="text-lg mb-2">
                    {'>'} {point}
                  </li>
                ))}
              </ol>
            )}

            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
