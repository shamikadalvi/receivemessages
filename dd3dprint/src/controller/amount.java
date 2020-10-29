package controller;

public class amount



{

	
	
	public String ORDER_ID;
	public String fullname;
	public String emailid;
	public String phonenum;
	public String address;
	public String TXN_AMOUNT;
	
	
	public String getTXN_AMOUNT() {
		return TXN_AMOUNT;
	}
	public void setTXN_AMOUNT(String tXN_AMOUNT) {
		TXN_AMOUNT = tXN_AMOUNT;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getORDER_ID() {
		return ORDER_ID;
	}
	public void setORDER_ID(String oRDER_ID) {
		ORDER_ID = oRDER_ID;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(String phonenum) {
		this.phonenum = phonenum;
	}
	
	
	
	
	
}
