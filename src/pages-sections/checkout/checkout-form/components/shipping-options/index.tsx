"use client";

import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from "next/navigation";

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
  CardContent,
} from "@mui/material";
import type { PricedShippingOption } from "@medusajs/medusa/dist/types/pricing";
import type { Cart } from "@medusajs/medusa";
import { useEffect, useState } from "react";
import { H2, H1, H3 } from "components/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { formatAmount } from "medusa/lib/util/prices";
import AddIcon from "@mui/icons-material/Add";
import { setShippingMethod } from "medusa/modules/checkout/actions";
import ErrorMessage from "medusa/modules/checkout/components/error-message";
import { LoadingButton } from "@mui/lab";

type ShippingProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
  availableShippingMethods: PricedShippingOption[] | null;
};

const ShippingOptions: React.FC<ShippingProps> = ({
  cart,
  availableShippingMethods,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [temp, setValue] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get("step") === "delivery";

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    router.push(pathname + "?step=payment", { scroll: false });
  };

  const set = async (id: string) => {
    setIsLoading(true);
    await setShippingMethod(id)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    set((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    setIsLoading(false);
    setError(null);
  }, [isOpen]);

  return (
    <Box sx={{ mb: 4 }}>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Stack direction="row" columnGap={1} alignItems="center">
          <Typography variant="h6" sx={{ mb: 1 }}>
            Shipping
          </Typography>
          {!isOpen && cart.shipping_methods.length > 0 && (
            <CheckCircleIcon color="success" />
          )}
        </Stack>

        {!isOpen && cart.shipping_methods.length > 0 && (
          <Button
            onClick={handleEdit}
            color="primary"
            variant="contained"
            size="small"
            sx={{ maxWidth: "fit-content" }}
            data-testid="edit-delivery-button"
          >
            Edit
          </Button>
        )}
      </Stack>

      {isOpen ? (
        <div>
          <div>
            <FormControl>
              <RadioGroup
                data-testid="delivery-option-radio"
                onChange={handleChange}
                sx={{ gap: 2 }}
              >
                {availableShippingMethods &&
                  availableShippingMethods.map((option) => {
                    return (
                      <>
                        <Card
                          key={option?.id}
                          sx={{
                            border:
                              option.id ===
                              cart?.shipping_methods[0]?.shipping_option_id
                                ? "2px solid maroon"
                                : "",
                            px: 1,
                            "&:hover": {
                              bgcolor: "lightgreen",
                            },
                          }}
                        >
                          <FormControlLabel
                           
                            value={option.id as string}
                            labelPlacement="end"
                            control={
                              <Radio
                                checked={
                                  option.id ===
                                  cart?.shipping_methods[0]?.shipping_option_id
                                }
                                icon={<AddIcon color="secondary" />}
                                checkedIcon={
                                  <CheckCircleIcon color="success" />
                                }
                              />
                            }
                            label={
                              <Box
                              
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: 2,
                                  height: "100%",
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  {option.name}
                                </Typography>

                                <Typography variant="body1">
                                  {formatAmount({
                                    amount: option.amount!,
                                    region: cart?.region,
                                    includeTaxes: false,
                                  })}
                                </Typography>
                              </Box>
                            }
                          />
                        </Card>
                      </>
                    );
                  })}
              </RadioGroup>
            </FormControl>
          </div>

          <ErrorMessage
            error={error}
            data-testid="delivery-option-error-message"
          />

          <LoadingButton
            size="large"
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleSubmit}
            loading={isLoading}
            loadingPosition="end"
            color="primary"
            disabled={!cart.shipping_methods[0]}
            data-testid="submit-delivery-option-button"
          >
            Continue to payment
          </LoadingButton>
        </div>
      ) : (
        <Box>
          <Box>
            {!isOpen && cart && cart?.shipping_methods.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  columnGap: "16px",
                }}
              >
                <Typography fontWeight="medium" variant="body1">
                  {cart.shipping_methods[0].shipping_option.name}{" "}
                </Typography>
                <Typography fontWeight="bold" variant="body1">
                  {formatAmount({
                    amount: cart.shipping_methods[0].price,
                    region: cart.region,
                    includeTaxes: false,
                  })
                    .replace(/,/g, "")
                    .replace(/\./g, ",")}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShippingOptions;
