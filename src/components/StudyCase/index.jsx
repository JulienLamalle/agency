import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import studycases from './studycases';
import { useParams } from 'react-router-dom'; 

const StudyCase = () => {
  let { studyCaseId } = useParams();
  const [currentCase, setCurrentCase] = useState(null);

  useEffect(() => {
    studyCaseId = studyCaseId.replace("-study-case", "");
    setCurrentCase(studycases.find((studycase) => studycase.slug === studyCaseId));
  })

  return(
    <div>
      {currentCase && (
      <div>
        <h4>
          <FormattedMessage id={`${currentCase.slug}.title`} />
        </h4>
        <p>
          <FormattedMessage id={`${currentCase.slug}.paragraph`} />
        </p>
      </div>
    )}
    </div>
  )
}

export default StudyCase;