import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { clx } from "@medusajs/ui";
import { Box, Typography } from "@mui/material";
import {
  SelectHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type NativeSelectProps = {
  placeholder?: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
} & SelectHTMLAttributes<HTMLSelectElement>;

const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    { placeholder = "Select...", defaultValue, className, children, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null);
    const [isPlaceholder, setIsPlaceholder] = useState(false);

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    );

    useEffect(() => {
      if (innerRef.current && innerRef.current.value === "") {
        setIsPlaceholder(true);
      } else {
        setIsPlaceholder(false);
      }
    }, [innerRef.current?.value]);

    return (
      <Box
        sx={{position:'relative'}}
      >
        <Typography variant="caption" textTransform="capitalize" sx={{m:0, top:-18, left:1, position:'absolute'}}>Select Country</Typography>
        <Box
          
          onFocus={() => innerRef.current?.focus()}
          onBlur={() => innerRef.current?.blur()}
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "normal",
            border: "1px solid lightgrey",
            
            width: "100%",
            borderRadius: "0.375rem",
            "&:hover": {
              bgcolor: "grey.300",
              borderShadow: "1px 1px 1px 1px grey.800",
            },
            color: isPlaceholder ? "grey.500" : "grey.800",
          }}
        >
          
          <select
         
            ref={innerRef}
            defaultValue={defaultValue}
            {...props}
            style={{
              appearance: "none",
              flex: 1,
              backgroundColor: "transparent",
              border: "none",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              color:'grey',
              transition:
                "background-color 150ms, border-color 150ms, color 150ms, fill 150ms, stroke 150ms, opacity 150ms, box-shadow 150ms, transform 150ms",
              outline: "none",
            }}
          >
            <option disabled value="">
              {placeholder}
            </option>
            {children}
          </select>
          <span
            style={{
              position: "absolute",
              right: "1rem",
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <ExpandMoreIcon />
          </span>
        </Box>
      </Box>
    );
  }
);

NativeSelect.displayName = "NativeSelect";

export default NativeSelect;

const style2 = {
  position: "absolute",
  right: "1rem",
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
};

const style1 = {
  appearance: "none",
  flex: 1,
  backgroundColor: "transparent",
  border: "none",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.625rem",
  paddingBottom: "0.625rem",
  transition:
    "background-color 150ms, border-color 150ms, color 150ms, fill 150ms, stroke 150ms, opacity 150ms, box-shadow 150ms, transform 150ms",
  outline: "none",
};
