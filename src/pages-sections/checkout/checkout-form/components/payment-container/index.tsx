import type { PaymentSession } from "@medusajs/medusa";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  CircularProgress,
  Card,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";

type PaymentContainerProps = {
  paymentSession: PaymentSession;
  selectedPaymentOptionId: string | null;
  disabled?: boolean;
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>;
};

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
}) => {
  return (
    <Card
      key={paymentSession.id}
      sx={{
       px:1,
        border:
          selectedPaymentOptionId === paymentSession.provider_id
            ? "2px solid lightblue"
            : "none",
            '&:hover':{
              bgcolor:'lightgreen'
            }
      }}
    >
      <FormControlLabel
      sx={{width:'100%'}}
        value={paymentSession.provider_id as string}
        disabled={disabled}
        control={
          <Radio
            checked={selectedPaymentOptionId === paymentSession.provider_id}
            checkedIcon={<CheckCircleIcon color="success" />}
            icon={<AddIcon color="secondary" />}
          />
        }
        label={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              columnGap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">
                {paymentInfoMap[paymentSession.provider_id]?.title ||
                  paymentSession.provider_id}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                width: 115,
                height: 50,
              }}
            >
              {paymentInfoMap[paymentSession.provider_id]?.icon}
            </Box>
          </Box>
        }
      />
    </Card>
  );
};

export default PaymentContainer;
