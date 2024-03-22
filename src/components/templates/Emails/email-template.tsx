import React from "react";

interface EmailTemplateProps {
  firstName: string;
}

function EmailTemplate({ firstName }: EmailTemplateProps): JSX.Element {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}

export default EmailTemplate;
