import Typography from "@/components/ui/Typography";
import React from "react";

interface EmailTemplateProps {
  firstName: string;
}

function EmailTemplate({ firstName }: EmailTemplateProps): JSX.Element {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <Typography>Merci d&#39;avoir envoyé ce mail test</Typography>
    </div>
  );
}

export default EmailTemplate;
