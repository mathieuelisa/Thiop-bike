import Typography from "@/components/ui/Typography";
import React from "react";

interface EmailTemplateProps {
  firstName: string;
  participants: string;
}

function EmailTemplate({
  firstName,
  participants,
}: EmailTemplateProps): JSX.Element {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <Typography>
        Merci {firstName} d&#39;avoir envoyé ce mail test, nous reviendrons vers
        toi pour une reservation de {participants}. Allez salut !!!
      </Typography>
    </div>
  );
}

export default EmailTemplate;
